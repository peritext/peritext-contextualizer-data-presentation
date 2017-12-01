import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

function LinkRenderer(props) {
  return <a href={props.href} target="_blank">{props.children}</a>
}


const BlockStatic = ({
  resource,
  contextualizer,
  contextualization
}, {
  datasets = {}
}) => {
  const presentationData = resource.data.presentationData;
  const dataset = datasets[resource.data.thumbnailDataset];
  return presentationData ? (<figure className="peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-data-presentation">
    {
      dataset & dataset.uri ?
      <img className="resource-thumbnail"
        src={dataset.uri}
      /> :
        <div className="thumbnail-placeholder" />
      
    }
    <div className="data-presentation-header">
      <h2>
        {presentationData.metadata.title}
      </h2>
      <p className="data-presentation-authors">
        {
          presentationData.metadata.authors.join(', ')
        }.
      </p>
    </div>
    <div className="data-presentation-body">
      {
        contextualizer.displayCommentsInCodex &&
        presentationData.order
        .map(slideId => (
          <div key={slideId} className="static-slide">
            <h3>{presentationData.slides[slideId].title}</h3>
            <ReactMarkdown
              source={presentationData.slides[slideId].markdown}
            />
          </div>
        ))
      }
    </div>
  </figure>) : null;
};

BlockStatic.propTypes = {
  resource: PropTypes.object,
  contextualizer: PropTypes.object,
  contextualization: PropTypes.object,
};

BlockStatic.contexTypes = {
  datasets: PropTypes.object,
}

export default BlockStatic;