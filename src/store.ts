import { map } from 'nanostores'


export type State =  {step: string;
  one: string;
  two: string;
  more: string;
  type: string;
  small: string;
  middle: string;
  large: string;
  when: string;
  position: string;
  good: string;
  anxious: string;
  aggressive: string;
  wounded: string;
  unknown: string;
  }

const state = map<State>({
  step: '1',
  one: '',
  two: '',
  more: '',
  type: '',
  small: '',
  middle: '',
  large: '',
  when: '',
  position: '',
  good: '',
  anxious: '',
  aggressive: '',
  wounded: '',
  unknown: '',
})

export default state
