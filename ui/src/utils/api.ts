import {
  DashboardsApi,
  CellsApi,
  TelegrafsApi,
  ViewsApi,
  SourcesApi,
  QueryApi,
  SetupApi,
  ProtosApi,
} from 'src/api'

import Client from '@influxdata/influx'

const basePath = '/api/v2'

export const client = new Client(basePath)

export const viewsAPI = new ViewsApi({basePath})
export const dashboardsAPI = new DashboardsApi({basePath})
export const cellsAPI = new CellsApi({basePath})
export const telegrafsAPI = new TelegrafsApi({basePath})
export const sourcesAPI = new SourcesApi({basePath})
export const queryAPI = new QueryApi({basePath})
export const setupAPI = new SetupApi({basePath})
export const protosAPI = new ProtosApi({basePath})
