
  declare module 'react-native-vector-icons/FontAwesome';
  declare module 'react-native-vector-icons/MaterialCommunityIcons';
  declare module 'react-native-vector-icons/*';
  declare module '*.svg' {
    import * as React from 'react';
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
  }