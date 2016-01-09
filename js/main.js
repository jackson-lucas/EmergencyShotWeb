import CallStore from './Components/CallStore.js'
import dispatcher from './Components/dispatcher.js'
import Router from './Components/Router.js'

dispatcher.addStore(new CallStore())

Router.initialize()
