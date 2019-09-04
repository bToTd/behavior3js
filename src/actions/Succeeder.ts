import Action from '../core/Action';
import {SUCCESS, BaseNodeData} from '../constants';

/**
 * This action node returns `SUCCESS` always.
 *
 * @module b3
 * @class Succeeder
 * @extends Action
 **/

export default class Succeeder extends Action {
  /**
   * Creates an instance of Succeeder.
   * @memberof Succeeder
   */
  constructor(){
    let data:BaseNodeData;
    data.name = "Succeeder"
    super(data);
  }

  /**
   * Tick method.
   * @method tick
   * @param {b3.Tick} tick A tick instance.
   * @return {Constant} Always return `SUCCESS`.
   **/
  tick(tick) {
    return SUCCESS;
  }
};
