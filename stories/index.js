import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Static from './StaticContextualizationContainer';
import Dynamic from './DynamicContextualizationContainer';

import presentation from './presentation';


const resource = {
  metadata: {
    title: 'coucou',
  },
  data: {
    presentationDataset: 'test',
    thumbnailDataset: 'image'
 }
};
const datasets = {
  test: {
    rawData: presentation
  },
  image: {
    uri: '/thumbnail.png',
    mode: 'get'
  }
}

storiesOf('Dynamic contextualization', module)
  .add('basic', () => 
    <Dynamic
      resource={resource}
      datasets={datasets}
    />
  )
  .add('set contextualization mode to scroller', () => 
    <Dynamic
      resource={resource}
      datasets={datasets}
      contextualizer={{
        displayMode: 'scroller'
      }}
    />
  )
  .add('fetch resource from uri', () => 
    <Dynamic
      resource={resource}
      datasets={{
        test: {
          mode: 'get',
          uri: '/presentation.json'
        }
      }}
    />
  )


storiesOf('Static contextualization', module)
  .add('basic', () => 
    <Static
      resource={resource}
      datasets={datasets}
      contextualizer={{
        displayCommentsInCodex: true
      }}
    />
  )
  .add('fetch resource from uri', () => 
    <Static
      resource={resource}
      datasets={{
        ...datasets,
        test: {
          mode: 'get',
          uri: '/presentation.json'
        }
      }}
      contextualizer={{
        displayCommentsInCodex: true
      }}
    />
  )