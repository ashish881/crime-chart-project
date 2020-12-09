import React from 'react'
import {CsvToHtmlTable} from 'react-csv-to-table'
import nevada2018 from './data/N2018';

export default function Nevada2018() {
 
  return (
    <div>
        <CsvToHtmlTable
        data={nevada2018}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
        />
    </div>
  )
}
