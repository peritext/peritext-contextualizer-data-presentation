import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import {get} from 'axios';

function LinkRenderer(props) {
  return <a href={props.href} target="_blank">{props.children}</a>
}



class BlockStatic extends Component {
  static contextTypes = {
    datasets: PropTypes.object,
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

    const thumbnail = resource.data.thumbnailDataset && datasets[resource.data.thumbnailDataset];

    return loading === false ? (<figure className="peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-data-presentation">
    {
      thumbnail && thumbnail.uri ?
      <img className="resource-thumbnail"
        src={thumbnail.uri}
      /> :
        <div className="thumbnail-placeholder" />
      
    }
    <div className="data-presentation-header">
      <h2>
        {data.metadata.title}
      </h2>
      <p className="data-presentation-authors">
        {
          data.metadata.authors.join(', ')
        }.
      </p>
    </div>
    <div className="data-presentation-body">
      {
        contextualizer.displayCommentsInCodex &&
        data.order
        .map(slideId => (
          <div key={slideId} className="static-slide">
            <h3>{data.slides[slideId].title}</h3>
            <ReactMarkdown
              source={data.slides[slideId].markdown}
            />
          </div>
        ))
      }
    </div>
  </figure>) : null;
  }
}

export default BlockStatic;