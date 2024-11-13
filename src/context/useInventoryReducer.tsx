import { createData, randomPrice, randomAmounts } from "@root/utils/data";
import { useReducer } from "react";

export const actionTypes = {
    ADD_ITEM: "ADD_ITEM",
    UPDATE_ITEM: "UPDATE_ITEM",
} as const;

type AddItemAction = {
    type: typeof actionTypes.ADD_ITEM;
    payload: Item;
};

type UpdateItemAction = {
    type: typeof actionTypes.UPDATE_ITEM;
    payload: Partial<Item> & { id: number };
};

type Action = AddItemAction | UpdateItemAction;

interface Item {
    id: number;
    name: string;
    price: string;
    current: number;
    target: number;
}

interface State {
    items: Item[];
}

const itemReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return {
                items: [action.payload, ...state.items],
            };

        case actionTypes.UPDATE_ITEM:
            return {
                items: state.items.map((item) =>
                    item.id == action.payload.id
                        ? {
                              ...item,
                              ...action.payload,
                          }
                        : item
                ),
            };
    }
};

const rows = [
    createData("Frozen yoghurt", randomPrice(), randomAmounts()),
    createData("Ice cream sandwich", randomPrice(), randomAmounts()),
    createData("Eclair", randomPrice(), randomAmounts()),
    createData("Cupcake", randomPrice(), randomAmounts()),
    createData("Gingerbread", randomPrice(), randomAmounts()),
];

export const useItemReducer = () => {
    const initialState: State = { items: rows };
    const [state, dispatch] = useReducer(itemReducer, initialState);

    const addItem = () => {};

    const updateItem = (id: Item["id"], updates: Partial<Item>) => {
        dispatch({
            type: actionTypes.UPDATE_ITEM,
            payload: {
                id: id,
                ...updates,
            },
        });
    };

    return {
        items: state.items,
        addItem,
        updateItem,
        dispatch,
        actionTypes,
    };
};
