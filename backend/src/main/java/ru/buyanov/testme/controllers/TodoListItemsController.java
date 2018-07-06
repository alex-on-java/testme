package ru.buyanov.testme.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@RequestMapping("api/items")
public class TodoListItemsController {
    private List<String> list = new CopyOnWriteArrayList<>();
    {
        this.list.addAll(Arrays.asList("One", "Two", "Three"));
    }

    @RequestMapping("")
    public ResponseEntity<List<String>> getItems() {
        return ResponseEntity.ok(list);
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public ResponseEntity<String> addNewItem(@RequestBody String item) {
        String newItem = item.trim();
        list.add(newItem);
        return ResponseEntity.ok(newItem);
    }
}
