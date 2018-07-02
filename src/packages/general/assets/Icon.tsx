import * as React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
interface IconProps {
    name: string;
    size: number;
}

export class Icon extends React.Component<IconProps> {
    constructor(props:any){
        super(props);
    }
    public choose(){
        let icon:any;
        switch (this.props.name) {
            case 'cog':
                icon = <FontAwesome.FaCog size={this.props.size} />
            break;
            case 'home':
                icon = <FontAwesome.FaHome size={this.props.size} />
            break;
            case 'globe':
                icon = <FontAwesome.FaGlobe size={this.props.size} />
            break;
            default:
                icon = <FontAwesome.FaHome size={14} />
            break;
        }
        return icon;
    }
    public render(){
        return (this.choose())
    }

}