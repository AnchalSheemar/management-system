function PropertyList({data,checkProperty}){

    return(
        <div className="propertyclass">
            <table className="table table-striped table-sm ">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>size</th>
                    </tr>
                    
                </thead>
                <tbody>
                   {data.map(value=>{
                       
                     return  <tr key={value.id}>
                           <td><input type="checkbox" checked={value.isChecked} onChange={()=>checkProperty(value.id,!value.isChecked)}/></td>
                           <td>{value.name}</td>
                           <td>{value.des}</td>
                           <td>{value.size}</td>
                       </tr>
                   })}
                </tbody>
                </table>
        </div>
    );
}
export default PropertyList;