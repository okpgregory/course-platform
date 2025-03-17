import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Member = { id: string };

type InitialStateProps = {
  members: Member[];
};

const initialState: InitialStateProps = {
  members: [],
};

export const OnlineTracking = createSlice({
  name: "online",
  initialState,
  reducers: {
    ononline: (state, { payload: member }: PayloadAction<Member>) => {
      // check for duplicates
      const isAlreadyOnline = state.members.find(
        (data: any) => data.id === member.id
      );

      if (!isAlreadyOnline) state.members = [...state.members, member];
    },

    onoffline: (state, { payload: member }: PayloadAction<Member>) => {
      state.members = state.members.filter((member) => member.id !== member.id);
    },
  },
});

export const { onoffline, ononline } = OnlineTracking.actions;
export default OnlineTracking.reducer;
