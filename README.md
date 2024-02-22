# JavaScript Re-arrangeable Dashboard

![JavaScript Re-arrangeable Dashboard](dashboardDynamicStacked-darkGold.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

-   Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
-   Open the project folder in a terminal:

          npm install              # fetches dependencies
          npm start                # builds an application and starts the development server

-   The application is available at _http://localhost:8080_ in your browser, webpack-dev-server provides hot reload functionality.


## Description

_Re-arrangeable Dashboard example._

This example shows how to create a Dashboard with a number of channels which you can re-arrange using drag & drop or hide/show using the legend.

![Hide charts using legend, rearrange charts with drag & drop](./assets/interactions.gif)

Note that this example doesn't actually use the built-in "Dashboard" feature.
Instead, it relies on WebGL context sharing, a new capability added in LightningChart JS v5.0.0.
This lets the user use CSS layouts to control the position, size and visibility of as many charts as needed while enjoying the traditional performance advantages of LightningChart Dashboards.

Using shared WebGL contexts is as simple as creating all charts using the same `LightningChart` instance:

```ts
const lc = lightningChart()
const chart1 = lc.ChartXY()
const chart2 = lc.ChartXY()
...
```

For more information, refer to ["Grouping charts"](https://lightningchart.com/js-charts/docs/basic-topics/grouping-charts/) section in [Developer Documentation](https://lightningchart.com/js-charts/docs/basic-topics/).


## API Links

* [XY cartesian chart]
* [Line series]
* [Axis]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [LightningChart][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact sales@lightningchart.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@lightningchart.com.

[0]: https://github.com/Arction/
[1]: https://lightningchart.com/lightningchart-js-api-documentation/
[2]: https://lightningchart.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://lightningchart.com/support-services/

© LightningChart Ltd 2009-2022. All rights reserved.


[XY cartesian chart]: https://lightningchart.com/js-charts/api-documentation/v5.1.0/classes/ChartXY.html
[Line series]: https://lightningchart.com/js-charts/api-documentation/v5.1.0/classes/LineSeries.html
[Axis]: https://lightningchart.com/js-charts/api-documentation/v5.1.0/classes/Axis.html

