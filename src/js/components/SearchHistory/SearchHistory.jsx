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
                        {/* this.props.searchItems are all stored in a variable items. the map() 
                        functions goes through the array of items and passes in data which we 
                        labeled (item) in the parameters sections,
                        create a new <tr> with a key of the item.timestamp
                        and <td> with the item.city name */}
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