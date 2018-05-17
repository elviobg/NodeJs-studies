const websocket = io('http://localhost:3000')

websocket.on('msgToClient', function(data){  
  html = '<div class="dialogo">'
  html += '<h4>' + data.nickname + '</h4>'
  html += '<p>' + data.msg +'</p>'
  html += '</div>'

  $('#dialogs').append(html)
})

$('#send').click(function(){
  websocket.emit('msgToServer', {'nickname': 'NickName', 'msg':$('#msg').val()})
})