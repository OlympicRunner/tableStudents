import {createStructure} from './createStructure.js'
import {createForm}  from './openForm.js'
import {createElemTable} from './createElementTable.js'
import {btnsSort} from './sort.js'
import {createAllElements} from './createAllElements.js'
import {localPull} from './LocalStorage.js'
import {filter} from './filter.js'

(() => {

    let students = []

    localPull (students)
    

    createStructure ()
    createAllElements (students) /// так же для фильтра


    createForm (students)
    btnsSort(students)

    filter()
    
})();
