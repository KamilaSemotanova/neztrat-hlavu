import {chemicals} from "../../chemicals";
import {InfoBox} from "../InfoBox";
import {MixResult} from "../MixResult";
import React from "react";

return (
    <>
        <div onClick={() => setOpen(!open)}>Vyberte první chemikálii:</div>
        {open ? (
            <div className="chembox__grid container">
                <div className="chembox__button" value="">
                    <img
                        className="chembox__icon"
                        src={require('../../img/rocket.svg')}
                    />
                </div>
                {chemicals.map((chemical) => (
                    <div className={select2 === chemical.id ? "chembox__button disabled" : "chembox__button"}
                         key={chemical.id}
                         value={chemical.id}
                         onClick={() => {
                             setSelect1(chemical.id);
                             console.log(select1)
                         }}
                    >
                        <img className="chembox__icon" src={chemical.url} />
                        <div>{chemical.id}</div>
                    </div>
                ))}
            </div>
        ) : null}

        <div onClick={() => setOpen(!open)}>Vyberte druhou chemikálii:</div>
        {open ? (
            <div className="chembox__grid container">
                <div className="chembox__button" value="">
                    <img
                        className="chembox__icon"
                        src={require('../../img/rocket.svg')}
                    />
                </div>
                {chemicals.map((chemical) => (
                    <div
                        className={select1 === chemical.id ? "chembox__button disabled" : "chembox__button"}
                        key={chemical.id}
                        value={chemical.id}
                        disabled={select1 === chemical.id ? true : false}
                        onClick={() => {
                            setSelect2(chemical.id);
                            console.log(select2)
                        }}
                    >
                        <img className="chembox__icon" src={chemical.url} />
                        <div>{chemical.id}</div>
                    </div>
                ))}
            </div>
        ) : null}
    </>
);

return (
    <div className="seznam-chemikalii">
        <div className="seznam-chemikálii-body">
            <form className="seznam-chemikalii-form" onSubmit={handleSubmit}>
                <label>
                    <div className="seznam-chemikalii-label">
                        Vyberte první chemikálii:
                    </div>
                    <select onChange={(evt) => setSelect1(evt.target.value)}>
                        <option value="">Vyberte</option>
                        {chemicals.map((chemical) => (
                            <option
                                key={chemical.id}
                                value={chemical.id}
                                disabled={select2 === chemical.id ? true : false}
                            >
                                {chemical.nameOfProduct}
                            </option>
                        ))}
                        ;
                    </select>
                    <button
                        className="btn"
                        type="button"
                        disabled={select1 ? false : true}
                        onClick={() => handleOpenInfoBox('select1')}
                    >
                        ?
                    </button>
                </label>
                <label>
                    <div className="seznam-chemikalii-label">
                        Vyberte druhou chemikálii:
                    </div>
                    <select onChange={(evt) => setSelect2(evt.target.value)}>
                        <option value="">Vyberte</option>
                        {chemicals.map((chemical) => (
                            <option
                                key={chemical.id}
                                value={chemical.id}
                                disabled={select1 === chemical.id ? true : false}
                            >
                                {chemical.nameOfProduct}
                            </option>
                        ))}
                        ;
                    </select>
                    <button
                        className="btn"
                        type="button"
                        disabled={select2 ? false : true}
                        onClick={() => handleOpenInfoBox('select2')}
                    >
                        ?
                    </button>
                </label>
                <div className="seznam-chemikalii-controls">
                    <button
                        className="btn"
                        type="submit"
                        disabled={select1 && select2 ? false : true}
                    >
                        Míchat
                    </button>
                </div>
            </form>
        </div>
        {chemicalInfo && (
            <InfoBox
                name={chemicalInfo.nameOfProduct}
                chemical={chemicalInfo.nameOfChemical}
                products={chemicalInfo.otherProducts}
                use={chemicalInfo.use}
                specs={chemicalInfo.specification}
                warning={chemicalInfo.warningSign}
            />
        )}
        {mix ? <MixResult chemicalID1={select1} chemicalID2={select2} /> : null}
    </div>
);
};
