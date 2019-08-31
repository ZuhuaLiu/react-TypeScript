import React from 'react';

interface IProps {
    name:string;
    age:number;
}

const Func: React.FC<IProps> = ({name}) => {
    // const {name, setName} = React.useState(name);
    return (
        <div>
            function+{name}
        </div>
    );
}

export default Func
