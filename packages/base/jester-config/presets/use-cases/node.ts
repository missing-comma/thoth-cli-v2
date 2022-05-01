import { Test } from '../../helper/types';
import { JestPresetBuilder } from '../jest-config-preset-builder';
import base from './base';

const specifics: Test.Specifics = {};

export default new JestPresetBuilder({}, specifics).extend(base);
