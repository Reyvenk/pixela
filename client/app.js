$(document).ready(function () {
  // Create the grid //

  $('body').remove('.column')
  $('body').remove('.pixel')

  if (window.matchMedia('(max-width: 600px)').matches) {
    var nbColumn = 32
    var nbLine = 100
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
  var display = true

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
    createSet(color)
    displayed(display)
    $('#' + id).css({ backgroundColor: color })
  })

  $('.pixel').hover(function (event) {
    if (isDown) {
      var color = getColor()
      var id = event.target.id
      createSet(color)
      displayed(display)
      $('#' + id).css({ backgroundColor: color })
    }
  })

  $('.del').click(function (event) {
    $('.color-set').remove()
    $('.pixel').css({ backgroundColor: '' })
  })

  // Display //
  $('.display').click(function (event) {
    if (display == true) {
      display = false
    } else {
      display = true
    }
    displayed(display)
  })
})

function displayed(display) {
  if (display == true) {
    $('.icon').css({ visibility: 'visible' })
  } else {
    $('.icon').css({ visibility: 'hidden' })
  }
}

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

function setColor(color) {
  $('.input-color').val(color)
}

function createSet(color) {
  newcolor = color.replace('#', '')
  var count = $('.color-set').length + 1

  var top = 220 + count * 70
  if (document.getElementById(newcolor) == null && count <= 6) {
    $('body').append(
      '<div class="color-set icon ' + count + '" id ="' + newcolor + '"></div>'
    )
    $('.color-set').click(function (event) {
      console.log($(this).attr('id'))
      setColor('#' + $(this).attr('id'))
    })
    $('#' + newcolor).css({ backgroundColor: '#' + newcolor, top: top })
  }
}
