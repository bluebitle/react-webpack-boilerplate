
const SET_SELECT = 'SET_SELECT';


const setSelect = (obj) => ({
   type:  SET_SELECT,
    ...obj,
});

export default {
    SET_SELECT,
    setSelect,
}
