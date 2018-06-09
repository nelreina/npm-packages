const initialState = {
  data: {
    types: ["mac", "windows"],
    versions: {
      mac: [
        "OS X 10.9 Mavericks (Cabernet)",
        "OS X 10.10: Yosemite (Syrah)",
        "OS X 10.11: El Capitan (Gala)",
        "macOS 10.12: Sierra (Fuji)",
        "macOS 10.13: High Sierra"
      ],
      windows: ["Windows 7", "Windows 8.1", "Windows 10"]
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "typeName":
      return { ...state };

    default:
      return state;
  }
};
