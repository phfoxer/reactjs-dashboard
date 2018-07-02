import { default as iziToast } from 'izitoast';
import * as React from 'react';
interface IconProps {
    name: string;
    size: number;
}

export class Icon extends React.Component<IconProps> {
    constructor(props: any) {
        super(props);
    }

    public render(){
        iziToast.show({
            timeout: 5000,
            progressBar: true,
            progressBarEasing: 'linear',
            icon: 'fa fa-2x  fa-home',
            color: 'green',
            position: 'bottomRight',
            transitionOut: 'fadeOutUp',
            transitionIn: 'bounceInLeft',
            title: 'toast.title',
            pauseOnHover: true,
            message: 'toast.text'
        });
        return null;
    }
}