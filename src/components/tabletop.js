import React from 'react'
import Tabletop from 'tabletop'
import ReactMarkdown from 'react-markdown'


let publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1z4SUw_p5LMTbGFvt--f_NvIHpdBxZ2Yc-qcxcIveqnQ/pubhtml'
let markdown = ''

class TableMd extends React.Component {
    constructor(props, context) {
      super(props, context)

      this.state = {
        loading: true
      }
    }

    componentDidMount() {
      let self = this
      Tabletop.init( { key: publicSpreadsheetUrl,
        callback: function(data, tabletop) { 
          data.forEach(function(event) {
            markdown += '* **' + event.Name + '** &nbsp;&nbsp;&nbsp;' + event.Time + ', ' + event.Date + ', ' + event.Location + '\n\n'
          })
          self.setState({loading: false})
        },
        simpleSheet: true } )
    }

    componentWillUnmount() {
      markdown = '';
    }

    render() {
      if (this.state.loading) { return ( 
        <div className="TableMd">
          <div className='loading-state'>Loading...</div>
        </div>
      )} else { return (
        <div className="TableMd">
          <ReactMarkdown source={markdown}/>
        </div>
      )}
    }
  }
  
  export default TableMd