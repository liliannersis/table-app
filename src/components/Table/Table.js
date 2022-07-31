import React from 'react';

const Table = () => {
    return (
        <div className='container'>
           <h3> Наша таблица </h3>
            <table className='centered'>

                <thead className='container_head'>
                <tr>


                    <label>
                        <input type="checkbox"/>
                        <span>  </span>

                    </label>


                    <th> Name </th>


                    <th> Surname </th>
                    <th> Age </th>

                </tr>

                </thead>
                <tbody className='container_body'>

                </tbody>
                <tfoot className='container_foot'>
<tr>
    <td colSpan='4'> Пользователи </td>
</tr>


                </tfoot>



            </table>
        </div>
    );
};

export default Table;
