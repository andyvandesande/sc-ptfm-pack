﻿describe("Given a AreaChart component", function () {
  var sutLineChart = Sitecore.Speak.app.LineChart;
  var data = {
    "localization": {
      "fields": [
        {
          "field": "channel",
          "translations": {
            "10": "Search Engine Organic",
            "15": "Search Engine Organic Branded",
            "20": "Direct",
            "30": "Referred-Other",
            "31": "Referred-Blog",
            "32": "Referred-News",
            "33": "Referred-Conversations",
            "34": "Referred-Community",
            "35": "Referred-Wiki",
            "36": "Referred-Analyst",
            "40": "RSS",
            "50": "Email",
            "90": "Paid"
          }
        }
      ]
    },
    "dataset": [
      {
        "data": [
          {
            "date": "01 Jan 2011",
            "value": "1",
            "visits": "11",
            "valuePerVisit": "0.09",
            "channel": "10"
          },
          {
            "date": "10 Jan 2011",
            "value": "2",
            "visits": "12",
            "valuePerVisit": "0.16",
            "channel": "50"
          },
          {
            "date": "20 Jan 2011",
            "value": "3",
            "visits": "13",
            "valuePerVisit": "0.23",
            "channel": "20"
          },
          {
            "date": "30 Jan 2011",
            "value": "4",
            "visits": "14",
            "valuePerVisit": "0.28",
            "channel": "10"
          }
        ]
      }
    ]
  };


  it("should exists", function () {
    expect(sutLineChart).toBeDefined();
  });

  describe("Given a AreaChart", function () {    
    $sutEl = $(sutLineChart.el);

    it("it should have a DynamicData property", function () {
      expect(sutLineChart.DynamicData).toBeDefined();
    });

    it("it should have a CategoryFilter property", function () {
      expect(sutLineChart.CategoryFilter).toBeDefined();
    });

    it("it should have a ShowLegend property", function () {
      expect(sutLineChart.ShowLegend).toBeDefined();
    });
    it("it should have a ShowValues property", function () {
      expect(sutLineChart.ShowValues).toBeDefined();
    });
    it("it should have a SingleChartHeight property", function () {
      expect(sutLineChart.SingleChartHeight).toBeDefined();
    });
    it("it should have a EnableAnimation property", function () {
      expect(sutLineChart.EnableAnimation).toBeDefined();
    });
    it("it should have a DisableSelection property", function () {
      expect(sutLineChart.DisableSelection).toBeDefined();
    });
    it("it should have a EnableAnimation property", function () {
      expect(sutLineChart.EnableAnimation).toBeDefined();
    });
    
    it("it should have a ShowPointMarker property", function () {
      expect(sutLineChart.ShowPointMarker).toBeDefined();
    });
    // Axis
    it("it should have a ShowAxis property", function () {
      expect(sutLineChart.ShowAxis).toBeDefined();
    });
    // MultiSeries
    it("it should have a SeriesFilter property", function () {
      expect(sutLineChart.SeriesFilter).toBeDefined();
    });
    //Scrolling
    it("it should have a VisibleCategoriesRange property", function () {
      expect(sutLineChart.VisibleCategoriesRange).toBeDefined();
    });    
    // Client only properties
    it("it should have a NoDataToDisplay property", function () {
      expect(sutLineChart.NoDataToDisplay).toBeDefined();
    });    
    it("it should have a PropertyNotDefined property", function () {
      expect(sutLineChart.PropertyNotDefined).toBeDefined();
    });    
      
    it("it should have a ChartProperties property", function () {
      expect(sutLineChart.chartProperties).toBeDefined();
    });    
  });

  describe("Given a AreaChart Control", function () {
    $sutEl = $(sutLineChart.el);

    it("it should create the Control when I execute Run", function () {
      expect(sutLineChart).toBeDefined();       
    
    });

    it("it should not appear when I set the isVisible property", function () {
      var value = false; 
      expect($sutEl.is(":visible")).toEqual(!value);
      sutLineChart.IsVisible = value;
      expect(sutLineChart.IsVisible).toEqual(value);
      expect($sutEl.is(":visible")).toEqual(value);
    });

    it("it should be disabled when I set the isEnabled property to false", function () {
      var value = false;
      expect($sutEl.is(":disabled")).toEqual(value);
      sutLineChart.IsEnabled = value;
      expect(sutLineChart.IsEnabled).toEqual(value);
      expect($sutEl.is(":disabled")).toEqual(value);
    });
      
    describe("it should have a getChartComponentName property", function () {
      it("to be defined as a function", function () {
        expect(sutLineChart.getChartComponentName).toBeDefined();
        expect(typeof sutLineChart.getChartComponentName).toBe("function");
      });

      var chartProperties = {
        appearance: {
          stackSeries: false,
          visibleCategoriesRange: null
        },
        dataType: ""
      };

      it("when dataType is 'SingleSeries' it returns 'Line'", function () {
        chartProperties.dataType = "SingleSeries";
        expect(sutLineChart.getChartComponentName(chartProperties)).toBe("Line");
      });

      describe("when dataType is 'MultiSeries'", function () {
        it("it returns 'MSLine'", function () {
          chartProperties.dataType = "MultiSeries";
          expect(sutLineChart.getChartComponentName(chartProperties)).toBe("MSLine");
        });
          
        it("and when visibleCategoriesRange is a number larger than 0 it returns 'ScrollLine2D'", function () {
          chartProperties.appearance.visibleCategoriesRange = 6;
          expect(sutLineChart.getChartComponentName(chartProperties)).toBe("ScrollLine2D");
        });     
      });
    });
      
    describe("it should have a handleError property", function () {
      it("to be defined as a function", function () {
        expect(sutLineChart.handleError).toBeDefined();
        expect(typeof sutLineChart.handleError).toBe("function");
      });
      
    // ProgressIndicator not implemented yet
    //describe("it should have a toggleProgressIndicator property", function () {
    //  it("to be defined as a function", function () {
    //    expect(sutLineChart.toggleProgressIndicator).toBeDefined();
    //    expect(typeof sutLineChart.toggleProgressIndicator).toBe("function");
    //  });

    //  it("and when it is called with 'true' argument then the indicator is shwon", function () {
    //    sutLineChart.IsVisible = true;
    //    sutLineChart.toggleProgressIndicator(true);
    //    var pi = $('[data-sc-id="' + $chartElement.attr("data-sc-id") + 'ProgressIndicator"]');
    //    expect(pi.css("display") === "block").toBe(true);
    //  });

    //  it("and when it is called with 'false' argument then the indicator is hidden", function () {
    //    sutLineChart.IsVisible = true;
    //    sutLineChart.toggleProgressIndicator(false);
    //    var pi = $('[data-sc-id="' + $chartElement.attr("data-sc-id") + 'ProgressIndicator"]');
    //    expect(pi.css("display") === "none").toBe(true);
    //  });

    //  it("and when the chart is hidden, if we call toggleprogressIndicator(true) then the indicator is hidden", function () {
    //    sutLineChart.IsVisible = false;
    //    sutLineChart.toggleProgressIndicator(true);
    //    var pi = $('[data-sc-id="' + $chartElement.attr("data-sc-id") + 'ProgressIndicator"]');
    //    expect(pi.css("display") === "none").toBe(true);
    //  });
    //});
    });
  });

  describe("Given a AreaChart Control", function () {    
    $sutEl = $(sutLineChart.el);

    it("it should have FusionCharts object holding the chart data when data is set to the DynamicData property", function () {
      expect(sutLineChart).toBeDefined();      
      sutLineChart.DynamicData = data;
      var id = $sutEl.find("span")[0].id;
      var chartData = FusionCharts(id).getJSONData();
      expect(chartData.data.length).toBe(4);
      expect(chartData.data[0].label).toBe(data.dataset[0].data[0].date);
    });
  });
});