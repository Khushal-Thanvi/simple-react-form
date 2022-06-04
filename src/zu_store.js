import create from "zustand";

// Create a simple store with a single person object and a function to set the person object.

const useStore = create((set) => ({
    person: {name: "-1", age: -1, gender: "NAN"},
    setPerson: (person) =>
        set((state) => ({person: {...person}}))
}))

export default useStore;