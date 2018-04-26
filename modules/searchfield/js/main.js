/**
 * A module to allow users to search across each column field.
 *
 * @module searchfield
 * @version 1.0
 * @author Richard Frausto
 * @requires jQuery library  (3.3.1)
 * @requires DataTables plugin - https://datatables.net/
 * @todo
 * The DataTable plugin is well written and is highly configurable. Pleaase
 * refer to the documentation for further details on multifilter search.
 * https://datatables.net/examples/api/multi_filter.html
 */
$(document).ready(function() {

    // Setup - add a text input to each grid column
    $('#example thead th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );

    // DataTable
    var table = $('#example').DataTable({
      "paging":   true,
      "ordering": false,
      "info":     true
    });

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.header() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
