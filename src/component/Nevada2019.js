import React from 'react'
import {CsvToHtmlTable} from 'react-csv-to-table'
import nevada2019 from './data/N2019';

export default function Nevada2019() {
 
  return (
    <div>
        <CsvToHtmlTable
        data={nevada2019}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
        />
    </div>
  )
}
