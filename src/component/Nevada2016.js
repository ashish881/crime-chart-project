import React from 'react'
import {CsvToHtmlTable} from 'react-csv-to-table'
import nevada2016 from './data/N2016';

export default function Nevada2016() {
 
  return (
    <div>
        <CsvToHtmlTable
        data={nevada2016}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
        />
    </div>
  )
}
