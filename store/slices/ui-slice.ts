"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inViewFeature: null,
  fullScreenFeature: null,
  lastFullScreenFeature: null,
  layout: {
    alert: {
      isOpen: false,
      title: null,
      description: null,
      type: null,
    },
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    onHandleSetFullscreenFeature: (state, { payload }) => {
      state.fullScreenFeature = payload;
      if (payload !== null) {
        state.lastFullScreenFeature = payload;
      }
    },
    onSetInViewFeature: (state, { payload }) => {
      state.inViewFeature = payload;
    },
    onClearInViewFeature: (state) => {
      state.inViewFeature = null;
    },
    onSetFullScreenFeature: (state, { payload }) => {
      state.fullScreenFeature = payload;
    },
    onClearFullScreenFeature: (state) => {
      state.fullScreenFeature = null;
    },
    onSetLastFullScreenFeature: (state, { payload }) => {
      state.lastFullScreenFeature = payload;
    },
    onClearLastFullScreenFeature: (state) => {
      state.lastFullScreenFeature = null;
    },

    onShowAlert: (state, { payload }) => {
      state.layout.alert = payload;
      state.layout.alert.isOpen = true;
    },
    onCloseAlert: (state, { payload }) => {
      state.layout.alert = initialState.layout.alert;
    },
  },
});

export const {
  onHandleSetFullscreenFeature,
  onSetInViewFeature,
  onClearInViewFeature,
  onSetFullScreenFeature,
  onClearFullScreenFeature,
  onSetLastFullScreenFeature,
  onClearLastFullScreenFeature,

  onShowAlert,
  onCloseAlert,
} = uiSlice.actions;
