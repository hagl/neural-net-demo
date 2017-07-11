import React from 'react';

function RawData(props) {

    let list = props.data.join(';');
    return (
      <div className='result' >
        <input type="text" lines="10" value={list} />
      </div>
    )

}

export default RawData;
