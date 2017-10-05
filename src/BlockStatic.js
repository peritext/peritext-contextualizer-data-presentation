import React from 'react';
import ReactMarkdown from 'react-markdown';

function LinkRenderer(props) {
  return <a href={props.href} target="_blank">{props.children}</a>
}


export default ({
  resource,
  contextualizer,
  contextualization
}) => {

  return (<figure className="peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-data-presentation">
    {
      resource.data.thumbnail ?
      <img className="resource-thumbnail"
        src={resource.data.thumbnail}
      /> :
        <div className="thumbnail-placeholder" />
      
    }
    <div className="data-presentation-header">
      <h2>
        {resource.data.metadata.title}
      </h2>
      <p className="data-presentation-authors">
        {
          resource.data.metadata.authors.join(', ')
        }.
      </p>
    </div>
    <div className="data-presentation-body">
      {
        contextualizer.displayCommentsInCodex &&
        resource.data.order
        .map(slideId => (
          <div key={slideId} className="static-slide">
            <h3>{resource.data.slides[slideId].title}</h3>
            <ReactMarkdown
              source={resource.data.slides[slideId].markdown}
              renderers={{Link: LinkRenderer}}
            />
          </div>
        ))
      }
    </div>
  </figure>);
}