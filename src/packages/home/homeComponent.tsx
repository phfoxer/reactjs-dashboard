import * as React from 'react';

import './HomeComponent.css';
export class HomeComponent extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (<div>
            <h4 className="h4">Página inicial</h4>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div> );
    }
}