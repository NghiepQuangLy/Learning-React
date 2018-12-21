import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Ninjas.css';

const Ninjas = ({ninjas, deleteNinja}) => {
    // const ninjasList = ninjas.map(ninja => {
    //     if (ninja.age > 20) {
    //         return (
    //             <div className="ninja" key={ ninja.id }>
    //                 <div>Name: { ninja.name }</div>
    //                 <div>Age: { ninja.age } </div>
    //                 <div>Belt: { ninja.belt }</div>
    //             </div>
    //         )
    //     } else {
    //         return null;
    //     }});

    const ninjasList = ninjas.map(ninja => {
        return (ninja.age > 20) ? (
            <div className="ninja" styleName="ninja" key={ ninja.id }>
                 <div>Name: { ninja.name }</div>
                 <div>Age: { ninja.age } </div>
                 <div>Belt: { ninja.belt }</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
            </div>
        ) : null;
    });
    return (
        <div className="ninjaList">
        { ninjasList }
        </div>
    )
};

export default CSSModules(Ninjas, styles);