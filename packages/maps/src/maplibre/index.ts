import type { Map } from 'maplibre-gl';
import type { IMapboxInstance } from '../../typings/index';
import BaseMapWrapper from '../utils/BaseMapWrapper';
import MaplibreService from './map';
export default class MapboxWrapper extends BaseMapWrapper<
  Map & IMapboxInstance
> {
  protected getServiceConstructor() {
    return MaplibreService;
  }
}
