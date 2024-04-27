import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen: false,
    selectedMessage:null,
  },
   reducers: { 
    openSendMsg: (state) => {
      state.sendMessageIsOpen=true  
    },
    closeSendMsg: (state) => {
      state.sendMessageIsOpen=false
    },
    openMessage: (state , action) => {
      state.selectedMessage=action.payload
    },
  },
});      

export const { openSendMsg, closeSendMsg , openMessage} = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectedMail = (state) => state.mail.selectedMessage;


export default mailSlice.reducer;
