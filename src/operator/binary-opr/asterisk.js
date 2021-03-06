/**
 * 星号操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        pathData = "M0,22.248c0-0.815,0.551-1.487,1.656-2.016l10.008-4.752L1.512,10.728C0.504,10.249,0,9.601,0,8.784   c0-0.479,0.191-0.936,0.576-1.368c0.384-0.432,0.839-0.648,1.368-0.648c0.384,0,0.911,0.264,1.584,0.792l8.928,6.48   c-0.72-7.92-1.08-12-1.08-12.24c0-0.479,0.18-0.9,0.54-1.26C12.276,0.18,12.744,0,13.32,0c0.479,0,0.911,0.169,1.296,0.504   C15,0.84,15.192,1.272,15.192,1.8l-1.08,12.24l7.992-5.904c1.248-0.912,2.088-1.368,2.52-1.368c0.527,0,0.983,0.216,1.368,0.648   c0.384,0.432,0.576,0.889,0.576,1.368c0,0.816-0.552,1.488-1.656,2.016l-10.008,4.752l10.152,4.752   c1.008,0.48,1.512,1.128,1.512,1.944c0,0.48-0.192,0.936-0.576,1.368c-0.385,0.432-0.84,0.648-1.368,0.648   c-0.288,0-0.673-0.144-1.152-0.432c-0.097-0.047-0.648-0.443-1.656-1.188c-1.008-0.744-2.293-1.692-3.852-2.844   c-1.561-1.152-2.844-2.088-3.852-2.808c0.72,7.92,1.08,12,1.08,12.24c0,0.48-0.18,0.9-0.54,1.26c-0.36,0.36-0.828,0.54-1.404,0.54   c-0.48,0-0.913-0.168-1.296-0.504c-0.385-0.335-0.576-0.767-0.576-1.296l1.08-12.24l-10.08,7.272c-0.72,0-1.272-0.18-1.656-0.54   c-0.385-0.36-0.601-0.648-0.648-0.864C0.023,22.644,0,22.44,0,22.248z";


    return kity.createClass( 'AsteriskOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var shape = null;

            this.callBase( "Dot" );

            shape = new kity.Path( pathData ).fill( "black" );
            shape.translate( 4, 6 );

            this.setBoxSize( 53, 63 );
            this.addOperatorShape( shape );

        }

    } );

} );
