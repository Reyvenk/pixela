$(document).ready(function () {
  // Create the grid //

  $('body').remove('.column')
  $('body').remove('.pixel')

  if (window.matchMedia('(max-width: 600px)').matches) {
    var nbColumn = 32
    var nbLine = 68
  } else {
    var nbColumn = 128
    var nbLine = 62
  }

  var pixelNum = 1
  var colCtn = 1
  var lineCtn = 1
  while (colCtn < nbColumn + 1) {
    $('body').append('<div class="column" id="col-' + colCtn + '">')
    lineCtn = 1
    while (lineCtn < nbLine + 1) {
      $('#col-' + colCtn + '').append(
        '<div class="pixel" id="' + pixelNum + '"></div>'
      )
      pixelNum++
      lineCtn++
    }
    colCtn++
  }

  // Color the grid //
  var isDown = false

  $(document)
    .mousedown(function () {
      isDown = true
    })
    .mouseup(function () {
      isDown = false
    })

  $('.pixel').click(function (event) {
    var id = event.target.id
    var color = getColor()
    $('#' + id).css({ backgroundColor: color })
  })

  $('.pixel').hover(function (event) {
    if (isDown) {
      var color = getColor()
      var id = event.target.id
      $('#' + id).css({ backgroundColor: color })
    }
  })

  $('.del').click(function (event) {
    console.log('df')
    $('.pixel').css({ backgroundColor: '' })
  })
})

// Get Color //
function getColor(event) {
  var color = $('.input-color').val()
  if (color.len == 0) {
    color = 'black'
  } else if (color[0] != '#') {
    color = '#' + color
  }
  return color
}
