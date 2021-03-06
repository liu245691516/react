import React, { useState, createContext } from 'react';

export const AppContext = createContext({});

export const AppContextProvider = ({children}) => {

    // 修改状态
	const setData = (name, data) => {
		setState((prevState) => {
			console.log(prevState)
			return { ...prevState, [name]: data };
		});
	};

	// 添加新的状态
	const addStore = (name, initState) => {
		setState((prevState) => ({ ...prevState, [name]: initState }));
	};

	const initAppState = {
		root: { text: 'hello context', list: [ '1+1=?', '1+2=?' ] },
		setData,
		addStore
	};
	const [ state, setState ] = useState(initAppState);

    return (
        <AppContext.Provider value={state}>{children}</AppContext.Provider>
    )
}