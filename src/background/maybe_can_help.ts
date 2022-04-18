// setInterval(async () => {
//     const port = await chrome.runtime.connect({name: "konekcija"});
//     port.postMessage({joke: "NEKAAA IDE SVEEE"});
// }, 10 * 1000)

// chrome.runtime.onConnect.addListener(function (port) {
//     console.log('OVDEEE JE USLOOOO');
//     console.assert(port.name === "knockknock");
//
//
//     port.onMessage.addListener(function (msg) {
//         if (msg.joke === "Knock knock")
//             port.postMessage({question: "Who's there?"});
//         else if (msg.answer === "Madame")
//             port.postMessage({question: "Madame who?"});
//         else if (msg.answer === "Madame... Bovary")
//             port.postMessage({question: "I don't get it."});
//     });
//
// });

// chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
//     console.log('PERICAAAA', tabs[0])
//     chrome.tabs.sendMessage(tabs[0].id, {greeting: "dobrodosaoooo"}, function (response) {
//         console.log(response);
//     });
// });


//
// chrome.runtime.onInstalled.addListener(() => {
//     setStoredCities([])
//     setStoredOptions({
//         hasAutoOverlay: false,
//         homeCity: '',
//         tempScale: 'metric',
//     })
//
//     chrome.contextMenus.create({
//         contexts: ['selection'],
//         title: 'Add city to weather extension',
//         id: 'weatherExtension',
//     })
//
//     chrome.alarms.create({
//         periodInMinutes: 60,
//     })
// })
//
// chrome.contextMenus.onClicked.addListener((event) => {
//     getStoredCities().then((cities) => {
//         setStoredCities([...cities, event.selectionText])
//     })
// })
//
// chrome.alarms.onAlarm.addListener(() => {
//     getStoredOptions().then((options) => {
//         if (options.homeCity === '') {
//             return
//         }
//         fetchOpenWeatherData(options.homeCity, options.tempScale).then((data) => {
//             const temp = Math.round(data.main.temp)
//             const symbol = options.tempScale === 'metric' ? '\u2103' : '\u2109'
//             chrome.action.setBadgeText({
//                 text: `${temp}${symbol}`,
//             })
//         })
//     })
// })
