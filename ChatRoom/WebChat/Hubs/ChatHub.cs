using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;
using WebChat.Controllers;
using WebChat.Models;

namespace WebChat.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(Message message)
        {
            await Clients.All.SendAsync("ReceiveMessage", message);
        }
    }
}
