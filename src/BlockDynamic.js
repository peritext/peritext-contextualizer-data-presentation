import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {get} from 'axios';

const isBrowser=new Function("try {return this===window;}catch(e){ return false;}");
const inBrowser = isBrowser();

let QuinoaPresentationPlayer
if (inBrowser) {
  QuinoaPresentationPlayer = require('quinoa-presentation-player').default;
}

class BlockDynamic extends Component {
  static contextTypes = {
    datasets: PropTypes.object,
    /**
     * Dimensions of the wrapping element
     */
    dimensions: PropTypes.object,
    /**
     * Whether the block asset is displayed in a note (and not in main content)
     */
    inNote: PropTypes.bool,
  }

  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.updateData(this.props);
  }

  componentWillReceiveProps (nextProps) {
    if (
        this.props.data !== nextProps.data ||
        this.getDataset(this.props) !== this.getDataset(nextProps)
      ) {
      this.updateData(nextProps);
    }
  }

  getDataset = (props) => {
    return this.context && 
           this.context.datasets && 
           this.context.datasets[props.resource.data.presentationDataset]
  }


  updateData = (props) => {
    const dataset = this.getDataset(props);
    if (dataset === undefined) {
      return;
    }
    if (dataset.rawData) {
      this.setState({
        loading: false,
        data: dataset.rawData,
        error: undefined,
      })
    } else if (dataset.uri) {
      this.setState({
        loading: true,
        error: undefined,
      });
      get(dataset.uri)
      .then((response) => {
        const data = response.data;
        this.setState({
          data,
          loading: false,
        })
      })
      .catch((error) => {
        this.setState({
          error
        })
      });
    } else {
      this.setState({
        error: 'no-dataset'
      })
    }
  }

  render() {
    const {
      props: {
        resource = {},
        contextualizer = {},
        allowInteractions = true,
        fixed,
        onExit,
      }, 
      state: {
        data,
        loading
      },
      context: {
        dimensions,
        datasets = {}
      }
    } = this;

    const onWheel = e => {
      if (fixed) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    const handleExit = direction => {
      if (typeof onExit === 'function') {
        onExit(direction);
      }
    };
    if (inBrowser) {
      return (
        <figure
          className="peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-data-presentation"
        >
          {!loading && <QuinoaPresentationPlayer
            presentation={{
              ...data,
              settings: {
                ...data.settings,
                template: contextualizer.displayMode || 'scroller'
              }
            }}
            onWheel={onWheel}
            onExit={handleExit}
            style={{
              position: fixed ? 'fixed' : 'absolute',
              left: fixed ? dimensions.position.left + 5 : undefined,
              top: fixed ? dimensions.position.top + 5 : undefined,
              width: fixed ? dimensions.width - 10 : undefined,
              height: fixed ? dimensions.height - 10 : undefined,
              pointerEvents: allowInteractions ? 'all' : 'none'
            }} 
          />}
        </figure>
      );
    } else return null;
  }
}


export default BlockDynamic;