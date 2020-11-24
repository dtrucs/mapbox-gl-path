import { Layer, GeoJSONSourceRaw, AnyLayout, AnyPaint } from "mapbox-gl";

export const sourcePointAndLineId = "points-and-lines";
export const pointCircleLayerId = "reference-points-circle";
export const pointTextLayerId = "reference-points-text";
export const betweenPointsLineLayerId = "between-points-line";

export const pointsAndLinesSource: GeoJSONSourceRaw = {
  type: "geojson",
  data: { type: "FeatureCollection", features: [] },
};

export const referencePointsCircleLayer: Layer = {
  id: pointCircleLayerId,
  type: "circle",
  source: sourcePointAndLineId,
  paint: { "circle-radius": 10, "circle-color": "#000000" },
  filter: ["in", "$type", "Point"],
};

export const referencePointsTextLayer: Layer = {
  id: pointTextLayerId,
  type: "symbol",
  source: sourcePointAndLineId,
  paint: { "text-color": "#ffffff" },
  layout: {
    "text-field": ["to-string", ["+", ["get", "index"], 1]],
    "text-allow-overlap": true,
  },
  filter: ["in", "$type", "Point"],
};

export const betweenPointsLineLayer: Layer = {
  id: betweenPointsLineLayerId,
  type: "line",
  source: sourcePointAndLineId,
  paint: { "line-color": "#000000", "line-width": 10 },
  filter: ["in", "$type", "LineString"],
};

export interface LayersCustomisation {
  pointCircleLayerCustomisation: LayerCustomisation;
  pointTextLayerCustomisation: LayerCustomisation;
  lineLayerCustomisation: LayerCustomisation;
}

export interface LayerCustomisation {
  layout: AnyLayout;
  paint: AnyPaint;
}
