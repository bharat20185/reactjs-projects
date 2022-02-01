import React, { useState, useContext, createContext } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
	return useContext(AppContext);
};

export const AppProvider = (props) => {
	const [siderbarOpen, setSiderbarOpen] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	const openSidebar = () => {
		setSiderbarOpen(true);
	};
	const closeSidebar = () => {
		setSiderbarOpen(false);
	};

	const appCtx = {
		siderbarOpen,
		modalOpen,
		openModal,
		closeModal,
		openSidebar,
        closeSidebar,
		setModalOpen
	};

	return (
		<AppContext.Provider value={appCtx}>
			{props.children}
		</AppContext.Provider>
	);
};
