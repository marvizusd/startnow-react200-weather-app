import React from 'react';

export default class SearchHistory extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const items = this.props.searchItems
        return (
            <div className="float-right w-50 pl-2">
                <div className="card ">
                    <h5 className="card-header ">Search History</h5>
                    <div className="card-body">
                    <table className="table table-striped">
                    <tbody>
                        {items.
                        map((item) => {
                    return (
                        <tr key={item.timestamp}>
                        <td>{item.city}</td>
                        <td>
                            <p>{item.date}</p>
                            <p>{item.time}</p>
                        </td>
                        </tr>
                    );
                    })}
                    </tbody>
                  </table>
                    </div>
                </div>
            </div>
        )
    }
}