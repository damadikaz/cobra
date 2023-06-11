export { placeholders, contextMenus };

const placeholders = {
  favs: [
    {
      id: "700",
      title: "YouTube",
      url: "https://youtube.com",
    },
    {
      id: "701",
      title: "YT Music",
      url: "https://music.youtube.com",
    },
    {
      id: "702",
      title: "Disnakerja",
      url: "https://disnakerja.com",
    },
    {
      id: "703",
      title: "Github",
      url: "https://github.com",
    },
    {
      id: "704",
      title: "JSFiddle",
      url: "https://jsfiddle.net/",
    },
    {
      id: "705",
      title: "Google",
      url: "https://google.com",
    },
    {
      id: "706",
      title: "Keep Notes",
      url: "https://keep.google.com",
    },
    {
      id: "707",
      title: "React",
      url: "https://react.dev",
    },
    {
      id: "708",
      title: "Netflix",
      url: "https://netflix.com/",
    },
    {
      id: "709",
      title: "Exercism",
      url: "https://exercism.org/",
    },
  ],
  notes: [
    {
      id: "601",
      title: "Implement Setting",
      content:
        "Add some user configurable settings into settings tab, and probably add light and dark mode as well",
      color: "a7ffeb",
      timestamp: "Mar 17",
    },
    {
      id: "602",
      title: "Things to do in Tiles",
      content:
        "Add tile editing feature. Add all contenxt menu action. find workaround for favicon",
      color: "ccff90",
      timestamp: "Jun 23",
    },
    {
      id: "603",
      title: "Features to be added in the notes section ",
      content: "Notes editing ofc. fully featured editor. change color. ",
      color: "fff475",
      timestamp: "Dec 13",
    },
    {
      id: "604",
      title: "General",
      content: "fix drop shadows. ",
      color: "fbbc04",
      timestamp: "Jan 1",
    },
  ],
};

const contextMenus = {
  tile: [
    {id: 'toNewtab', label: 'Open in new tab'},
    {id: 'toNewwindowpriv', label: 'Open in new private window'},
    {id: 'toNewwindow', label: 'Open in new window'},
    {id: 'separator', label: ''},
    {id: 'toEdit', label: 'Edit'},
    {id: 'toRemove', label: 'Remove'},
  ],
}