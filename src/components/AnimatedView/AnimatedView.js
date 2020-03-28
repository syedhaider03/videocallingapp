import React from 'react';
import * as Animatable from 'react-native-animatable';

const AnimatedView = (props) => {
    return (
        <Animatable.View
            duration={props.duration || 500}
            useNativeDriver
            onAnimationEnd={props.onAnimationEnd}
            onAnimationBegin={props.onAnimationBegin}
            style={props.style}
            delay={props.delay}
            direction={props.direction}
            easing={props.easing}
            iterationCount={props.iterationCount}
            iterationDelay={props.iterationDelay}
            transition={props.transition}
            onTransitionBegin={props.onTransitionBegin}
            onTransitionEnd={props.onTransitionEnd}
            isInteraction={props.isInteraction}
            animation={props.animation}
        >
            {props.children}
        </Animatable.View>
    );
}

export default AnimatedView;