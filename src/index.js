import {default as metadata} from './metadata';
import {default as BlockDynamic} from './BlockDynamic';
import {default as BlockStatic} from './BlockStatic';

import playerStyles from 'raw-loader!quinoa-presentation-player/build/Player.scss';
import scrollerStyles from 'raw-loader!quinoa-presentation-player/build/templates/scroller/ScrollerLayout.scss';
import stepperStyles from 'raw-loader!quinoa-presentation-player/build/templates/stepper/StepperLayout.scss';
import visModules from 'raw-loader!quinoa-vis-modules/build/globals.scss';
import timelineStyle from 'raw-loader!quinoa-vis-modules/build/Timeline/Timeline.scss';
import svgStyle from 'raw-loader!quinoa-vis-modules/build/SVGViewer/SVGViewer.scss';
import networkStyle from 'raw-loader!quinoa-vis-modules/build/Network/Network.scss';
import mapStyle from 'raw-loader!quinoa-vis-modules/build/Map/Map.scss';
import leafletStyle from 'raw-loader!leaflet/dist/leaflet.css';

const defaultCss = [
  leafletStyle,
  playerStyles, 
  scrollerStyles,
  stepperStyles,
  visModules,
  timelineStyle,
  svgStyle,
  networkStyle,
  mapStyle,
].join('\n');

export default {
  metadata,
  BlockDynamic,
  BlockStatic,
  defaultCss
}