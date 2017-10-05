import React from 'react';
import PropTypes from 'prop-types';

const isBrowser=new Function("try {return this===window;}catch(e){ return false;}");
const inBrowser = isBrowser();

let QuinoaPresentationPlayer
if (inBrowser) {
  QuinoaPresentationPlayer = require('quinoa-presentation-player').default;
}

const BlockDynamic = ({
  resource = {},
  contextualizer = {},
  allowInteractions = true,
  fixed,
  onExit,
}, {
  dimensions
}) => {
  const onWheel = e => {
    if (fixed) {
      e.stopPropagation();
      e.preventDefault();
    }
  };
  const presentation = resource.data;

  const handleExit = direction => {
    if (typeof onExit === 'function') {
      onExit(direction);
    }
  };
  if (inBrowser && presentation) {
    presentation.settings = presentation.settings ? {
      ...presentation.settings,
      template: contextualizer.displayMode || presentation.settings.template || 'scroller',
    } : {template: contextualizer.displayMode || 'scroller'};
    return (
      <figure
        className="peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-data-presentation"
      >
        <QuinoaPresentationPlayer
          presentation={resource.data}
          onWheel={onWheel}
          onExit={handleExit}
          style={{
            // position: 'absolute', // fixed ? 'fixed' : 'absolute',
            // left: 0,
            // top: 0,
            // width: '100%',
            // height: '100%',
            position: fixed ? 'fixed' : 'absolute',
            left: fixed ? dimensions.position.left + 5 : undefined,
            top: fixed ? dimensions.position.top + 5 : undefined,
            width: fixed ? dimensions.width - 10 : undefined,
            height: fixed ? dimensions.height - 10 : undefined,
            // border: fixed ? '5px solid #f32e36' : undefined,
            pointerEvents: allowInteractions ? 'all' : 'none'
          }} 
        />
      </figure>
    );
  } else return null;
}

/**
 * Component's context used properties
 */
BlockDynamic.contextTypes = {
  /**
   * The active story data
   */
  story: PropTypes.object,
  /**
   * Dimensions of the wrapping element
   */
  dimensions: PropTypes.object,
  /**
   * Id of the presentation being displayed full screen if any
   */
  fixedPresentationId: PropTypes.string,
  /**
   * Whether the block asset is displayed in a note (and not in main content)
   */
  inNote: PropTypes.bool,
};

export default BlockDynamic;