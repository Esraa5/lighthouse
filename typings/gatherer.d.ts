/**
 * @license Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

import * as _Node from '../lighthouse-core/lib/dependency-graph/node';
import * as _NetworkNode from '../lighthouse-core/lib/dependency-graph/network-node';
import * as _CPUNode from '../lighthouse-core/lib/dependency-graph/cpu-node';

declare global {
  namespace LH.Gatherer {
    export interface PassContext {
      options: object;
    }

    export interface LoadData {
      networkRecords: Array<void>;
      devtoolsLog: Array<void>;
      trace: {traceEvents: Array<TraceEvent>};
    }

    namespace Artifact {
      export interface LanternMetric {
        timing: number;
        optimisticEstimate: Simulation.Result;
        pessimisticEstimate: Simulation.Result;
        optimisticGraph: Simulation.GraphNode;
        pessimisticGraph: Simulation.GraphNode;
      }

      export interface TraceTimes {
        navigationStart: number;
        firstPaint: number;
        firstContentfulPaint: number;
        firstMeaningfulPaint: number;
        traceEnd: number;
        onLoad: number;
        domContentLoaded: number;
      }

      export interface TraceOfTab {
        timings: TraceTimes;
        timestamps: TraceTimes;
        processEvents: Array<TraceEvent>;
        mainThreadEvents: Array<TraceEvent>;
        startedInPageEvt: TraceEvent;
        navigationStartEvt: TraceEvent;
        firstPaintEvt: TraceEvent;
        firstContentfulPaintEvt: TraceEvent;
        firstMeaningfulPaintEvt: TraceEvent;
        onLoadEvt: TraceEvent;
        fmpFellBack: boolean;
      }
    }

    namespace Simulation {
      export type GraphNode = typeof _Node['prototype'];
      export type GraphNetworkNode = typeof _NetworkNode['prototype'];
      export type GraphCPUNode = typeof _CPUNode['prototype'];

      // type GraphIterator = (node: Graph, path: Graph[]) => void;
      // type GraphGetNext = (node: Graph) => Graph[];

      // export interface Graph {
      //   getDependents(): Graph[];
      //   getDependencies(): Graph[];
      //   getNumberOfDependencies(): number;
      //   getRootNode(): Graph;
      //   addDependent(node: Graph): void;
      //   addDependency(node: Graph): void;
      //   cloneWithoutRelationships(): Graph;
      //   cloneWithRelationships(predicate: any): number;
      //   traverse(iterator: GraphIterator, getNext: GraphGetNext): void;
      // }

      export interface MetricCoefficients {
        intercept: number;
        optimistic: number;
        pessimistic: number;
      }

      export interface Options {
        rtt?: number;
        throughput?: number;
        fallbackTTFB?: number;
        maximumConcurrentRequests?: number;
        cpuTaskMultiplier?: number;
        layoutTaskMultiplier?: number;
        additionalRttByOrigin?: Map<string, number>;
        serverResponseTimeByOrigin?: Map<string, number>;
      }

      export interface NodeTiming {
        startTime?: number;
        endTime?: number;
        queuedTime?: number;
        estimatedTimeElapsed?: number;
        timeElapsed?: number;
        timeElapsedOvershoot?: number;
        bytesDownloaded?: number;
      }

      export interface Result {
        timeInMs: number;
        nodeTiming: Map<GraphNode, NodeTiming>;
      }
    }
  }
}

// empty export to keep file a module
export {};