import React from 'react'
import {CsvToHtmlTable} from 'react-csv-to-table'
import nevada2017 from './data/N2017';

export default function Nevada2017() {
 
  return (
    <div>
        <CsvToHtmlTable
        data={nevada2017}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
        />
    </div>
  )
}
